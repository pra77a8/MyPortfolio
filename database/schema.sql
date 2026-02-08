-- MySQL Database Schema for Portfolio Testimonials
-- Create this database and table for production use

CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  rating INT NOT NULL DEFAULT 5,
  approved BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_approved (approved),
  INDEX idx_created (createdAt),
  CHECK (rating >= 1 AND rating <= 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample approved testimonials (optional)
INSERT INTO testimonials (name, role, message, rating, approved) VALUES
('Sarah Johnson', 'CEO, TechCorp', 'Working with Pranit was an absolute pleasure. His technical expertise and problem-solving skills are exceptional.', 5, TRUE),
('Michael Chen', 'Product Manager, StartupXYZ', 'Pranit delivered our project ahead of schedule with outstanding quality. Highly recommend!', 5, TRUE),
('Emily Rodriguez', 'CTO, DataMinds', 'His data science skills are top-notch. Pranit helped us unlock valuable insights from our data.', 5, TRUE);

-- Query to approve testimonials (for admin use)
-- UPDATE testimonials SET approved = TRUE WHERE id = ?;

-- Query to get all pending testimonials (for admin review)
-- SELECT * FROM testimonials WHERE approved = FALSE ORDER BY createdAt DESC;
