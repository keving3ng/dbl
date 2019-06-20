*** Settings ***
Library         SeleniumLibrary  timeout=10  implicit_wait=0
Library         ReactLibrary
Library         Screenshot
Suite Setup     Open browser  localhost:3000  chrome
Suite Teardown  Close browser


*** Test Cases ***

Scenario: Test Adding New Item
  Click Button                    id: add new item button
  Input Text                      id: edit name textbox           Apple
  Input Text                      id: edit price textbox          $0.99
  Input Text                      id: edit quantity textbox       10000
  Click Button                    id: submit defaults button
  Click Button                    id: add new key button
  Input Text Into Alert           Country of origin
  Click Element                   id: custom keys dropdown
  Click Element                   id: country of origin
  Input Text                      id: custom key value textbox     Canada
  Click Button                    id: submit custom data button
  Execute JavaScript              window.scrollTo(0, document.body.scrollHeight)
  Click Button                    id: save button




