Feature: Test the car configuration

  Scenario: Check if I am on the right page
    Given I am on the build page
    Then I should see the heading "Design your Volvo"

  Scenario: Review the configuration 
    Given I am on the build page
    And I choose an electric car
    And I customise as below
      | type | value             | 
      | button | Core | 
      | button | Twin motor | 
      | button   | Fusion Red   |
      | aria-label | 20″ 5-Spoke Black Diamond Cut             |
    When I click the button "Review"
    Then I should see the below customisation
      | type | value             | 
      | level | Core | 
      | powertrain | Single motor | 
      | color   | Fusion Red   |
      | wheels | 20″ 5-Spoke Black Diamond Cut             | 