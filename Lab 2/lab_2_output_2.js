class User {
  constructor(name, age, type, phone, phoneCode) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.phone = phone;
    this.phoneCode = phoneCode;
  }

  printDetails() {
    // Виведення інформації про користувача
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Type:", this.type);
    console.log("Phone:", this.phoneCode + this.phone);
  }
}

const UserType = {
  ENGINEER: 1,
  MANAGER: 2,
};

const user = new User("John", 25, UserType.ENGINEER, "9379992", "050");
user.printDetails();