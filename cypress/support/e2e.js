// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'
// let logs = [];
// let projectKey;

// before(function () {
//   if (Cypress.spec.relative.includes('.feature')) {
//     let pickle = this.currentTest._testConfig.unverifiedTestConfig.env.__cypress_cucumber_preprocessor_dont_use_this_spec.pickle;
//     projectKey = pickle.tags[0].name.replace('@ProjectKey-', '');
//   } else {
//     // Integration Test using .spec file
//     projectKey = this.currentTest.parent._testConfig.tags.replace('@ProjectKey-', '');
//   }
// });

// function postTestExecutionResults(testCaseKey, testStatus) {
//     const zephyrUrl = Cypress.env('zephyr').baseUrl; 
//     const requestBody = {
//         projectKey: projectKey,
//         testCaseKey: testCaseKey,
//         testCycleKey: `${Cypress.config('zephyrTestCycleKey')[projectKey]}`,
//         statusName: testStatus,
//         executedById: `${Cypress.env('zephyr').accountId}`,
//         assignedToId: `${Cypress.env('zephyr').accountId}`
//     };
//     cy.log(requestBody);
  
//     cy.request({
//       method: 'POST',
//       url: `${zephyrUrl}/testexecutions`,
//       headers: {
//         Authorization: `Bearer ${Cypress.env('zephyr').apiKey}`, 
//         'Content-Type': 'application/json'
//       },
//       body: requestBody
//     });
//   }
  
//   afterEach(function () {
//     let testCaseKey;
//     let projectKey;
//     let testStatus = this.currentTest.state === 'passed' ? 'Pass' : 'Fail';
//     if (Cypress.spec.relative.includes('.feature')) {
//         let pickle = this.currentTest._testConfig.unverifiedTestConfig.env.__cypress_cucumber_preprocessor_dont_use_this_spec.pickle;
//         testCaseKey = pickle.tags[1].name.replace('@', '');
//         testSteps = pickle.steps.map((step) => step.text).join('<br>');
//         projectKey = pickle.tags[0].name.replace('@ProjectKey-', '');
//       } else {
//         testCaseKey = this.currentTest._testConfig.unverifiedTestConfig.tags.replace('@', '');
//         testSteps = testTitle;
//         projectKey = this.currentTest.parent._testConfig.tags.replace('@ProjectKey-', '');
//       }
//     postTestExecutionResults(testCaseKey, testStatus);
//   });
