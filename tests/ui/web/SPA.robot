*** Settings ***
Library         SeleniumLibrary  timeout=10  implicit_wait=0
Library         String
Suite Setup     Open browser  localhost:3000  chrome
Suite Teardown  Close browser

*** Test Cases ***

Scenario: Add A New Item  
  Click Button                    id: add new item button
  Input Text                      id: edit name textbox               appletest
  Input Text                      id: edit price textbox              $0.99
  Input Text                      id: edit quantity textbox           10000
  Click Button                    id: submit defaults button
  Click Button                    id: add new key button
  Input Text Into Alert           Country of origin
  Click Element                   id: custom keys dropdown
  Click Element                   id: country of origin
  Input Text                      id: custom key value textbox        Canada
  Click Button                    id: submit custom data button
  Click Save Button     


Scenario: Check New Item Is Correct
  Reload Page
  Element Should Be Visible       id: appletest
  Element Should Be Visible       id: appletest quantity value
  ${testquantityvalue}=           Get Text                            id: appletest quantity value
  Execute Javascript              ${testquantityvalue} === 10000
  Element Should Be Visible       id: appletest price value
  ${testpricevalue}=              Get Text                            id: appletest price value
  Execute Javascript              "${testpricevalue}" === "$0.99"

Scenario: Searching For An Item
  ${product}=                     Get Text                            id: product card name
  ${product}=                     Convert To Lowercase                ${product}
  Input Text                      id: product search bar              ${product}
  Element Should Be Visible       id: ${product}
  

Scenario: Deleting An Item
  ${product}=                     Get Text                            id: product card name
  ${product}=                     Convert To Lowercase                ${product}
  Click Button                    id: delete ${product} card button
  Reload Page
  Element Should Not Be Visible   id: ${product}


Scenario: Editing The Quantity Of An Item
  Reload Page
  ${product}=                     Get Text                            id: product card name
  ${product}=                     Convert To Lowercase                ${product}
  ${quantity}=                    Get Text                            id: ${product} quantity value
  Click Button                    id: edit quantity button
  ${quantitytextbox}=             Get Value                           id: quantity value textbox
  Execute Javascript              ${quantity} === ${quantitytextbox}
  Click Button                    id: increase by 1 button
  Click Button                    id: finish edit quantity button
  ${expectedquantity}=            Evaluate                            ${quantity} + ${1}
  Reload Page
  ${quantity}=                    Get Text                            id: ${product} quantity value
  Execute Javascript              ${quantity} === ${expectedquantity}

*** Keywords ***
Click Save Button
  Click Button    id: save button
