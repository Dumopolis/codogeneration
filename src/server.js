import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware для парсинга JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mockUser = {
  email: "test@example.com",
  phone: "+79002009898",
  password: "password123",
};

// Эндпоинт для регистрации
app.post(
  "/register",
  [
    // Валидация email или телефона
    body("email").optional().isEmail().withMessage("Invalid email format"),
    body("phone")
      .optional()
      .isMobilePhone("any")
      .withMessage("Invalid phone number"),
    // Необходимо хотя бы одно поле: email или телефон
    body("email")
      .if(body("phone").not().exists())
      .exists()
      .withMessage("Either email or phone is required"),
    body("phone")
      .if(body("email").not().exists())
      .exists()
      .withMessage("Either email or phone is required"),
    // Валидация пароля (не менее 6 символов)
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    // Валидация ID клиента (целое число, обязательное поле)
    body("clientId")
      .isInt()
      .withMessage("Client ID must be an integer")
      .notEmpty()
      .withMessage("Client ID is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { email, phone, clientId } = req.body;

    // Логика регистрации
    res.json({
      message: "Registration successful",
      data: { email, phone, clientId },
    });
  }
);
app.post(
  "/login",
  [
    // Валидация email или телефона
    body("email").optional().isEmail().withMessage("Invalid email format"),
    body("phone")
      .optional()
      .isMobilePhone("any")
      .withMessage("Invalid phone number"),
    // Должно быть указано хотя бы одно поле: email или телефон
    body("email")
      .if(body("phone").not().exists())
      .exists()
      .withMessage("Either email or phone is required"),
    body("phone")
      .if(body("email").not().exists())
      .exists()
      .withMessage("Either email or phone is required"),
    // Валидация пароля (обязательное поле)
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { email, phone, password } = req.body;

    // Простая проверка email и пароля (логика может быть расширена)
    if (email && email !== mockUser.email) {
      res.status(401).json({ message: "Email not found" });
      return;
    }
    if (phone && phone !== mockUser.phone) {
      res.status(401).json({ message: "Phone not found" });
      return;
    }
    if (password !== mockUser.password) {
      res.status(401).json({ message: "Incorrect password" });
      return;
    }

    // Успешная авторизация
    res.json({
      message: "Login successful",
      token: "mock-jwt-token", // Здесь должен быть сгенерированный токен
    });
  }
);
let mockUsers = [
  { id: 1, email: 'user1@example.com', phone: '+1234567890', password: 'password1' },
  { id: 2, email: 'user2@example.com', phone: '+0987654321', password: 'password2' },
];

// Получение пользователя по ID
app.get('/users/:id', 
  param('id').isInt().withMessage('User ID must be an integer'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const userId = parseInt(req.params.id);
    const user = mockUsers.find(u => u.id === userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json({ user });
  }
);

// Изменение пользователя
app.put('/users/:id', 
  [
    param('id').isInt().withMessage('User ID must be an integer'),
    body('email').optional().isEmail().withMessage('Invalid email format'),
    body('phone').optional().isMobilePhone('any').withMessage('Invalid phone number'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const userId = parseInt(req.params.id);
    const userIndex = mockUsers.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const { email, phone, password } = req.body;
    mockUsers[userIndex] = { ...mockUsers[userIndex], email, phone, password };

    res.json({ message: 'User updated successfully', user: mockUsers[userIndex] });
  }
);

// Удаление пользователя
app.delete('/users/:id', 
  param('id').isInt().withMessage('User ID must be an integer'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const userId = parseInt(req.params.id);
    const userIndex = mockUsers.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    mockUsers = mockUsers.filter(u => u.id !== userId);
    res.json({ message: 'User deleted successfully' });
  }
);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
