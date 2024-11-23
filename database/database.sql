-- Create the database
CREATE DATABASE pizza_shop;

-- Use the database
USE pizza_shop;

-- Create the pizzas table
CREATE TABLE pizzas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(5, 2) NOT NULL
);

-- Insert some sample pizzas
INSERT INTO pizzas (name, description, price) VALUES
('Margherita', 'Classic pizza with tomato sauce, mozzarella, and basil', 8.99),
('Pepperoni', 'Pepperoni, tomato sauce, and mozzarella', 10.99),
('BBQ Chicken', 'Chicken, BBQ sauce, onions, and mozzarella', 12.49),
('Vegetarian', 'Tomatoes, bell peppers, onions, olives, and mozzarella', 9.99),
('Hawaiian', 'Ham, pineapple, tomato sauce, and mozzarella', 11.49);
