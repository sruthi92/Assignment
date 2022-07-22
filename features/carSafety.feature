Feature: Test the car safety page

  Scenario: Check if there is top navigation car menu
    Given I am on the car safety page
    Then I should see the button "Our Cars"

  Scenario: Check if there is a side navigation menu
    Given I am on the car safety page
    Then I should see the button "Menu"

  Scenario: Check for the elements on the car menu panel
    Given I am on the car safety page
    When I click the button "Our Cars"
    Then I should see the following elements
      | type | text             | 
      | button | HybridsPlug-in hybrids | 
      | button | ElectricPure electric | 
      | button   | Mild hybridsMild hybrids   |
      | a | SUVs             |
      | a | Estates             |
      | a | Sedans             |

  Scenario: Check for the elements on the side navigation panel 
    Given I am on the car safety page
    When I click the button "Menu"
    Then I should see the following elements
      | type | text             | 
      | button | Buy | 
      | button | Own | 
      | button   | About Volvo   |
      | button | Explore             |
      | button | More             |
      | button | International             |
