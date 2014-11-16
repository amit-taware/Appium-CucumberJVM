Feature: As a health specialist
  I want a BMI Calculator
  So that I can calculate patient's Body Mass Index
 
  @test
  Scenario Outline: Calculate Body Mass Index
    When I enter "<Age>" as age
    And I enter "<Height>" as height
    And I enter "<Weight>" as weight
    Then I should see "<BMI>" as bmi and "<Category>" as category
 
  Examples:
    |Age |Height |Weight |BMI  |Category   |
    |25	 |170    |50     |17.30|Underweight|
    |27	 |181    |80     |24.42|Normal     |
    |27	 |180    |90     |27.78|Overweight |
    |28  |175    |100    |32.65|Obese      |