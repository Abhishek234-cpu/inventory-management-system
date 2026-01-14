const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = new User({
      name: "admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      address: "Head Office",
      role: "admin",
    });

    await admin.save();
    console.log("Admin user created successfully");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
