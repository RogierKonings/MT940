@report
Feature: Report
  Scenario: a report is created from a CSV file
    Given the user opens the page "/report"
    When the user uploads a csv file
