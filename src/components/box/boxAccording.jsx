import React from 'react'
import BoxAccordingItem from './boxAccordingItem'

const data = [
  {
    header: `
  Get Funds in Your Account
    `,
    title: `How It Works`,
    contents: `RedArrowLoans realizes that financial problems come unexpected and always at a bad time. We believe that lending should be made easy, fast and not only rely on the individual's past history. We are here to help. The process starts with completing our Online Form. The Online Form must be completed accurately to make sure the funds are not sent to the wrong individual. Lenders use the information provided to verify your identity before sending you funds.

    One of the advantages of using RedArrowLoans is that we have many lenders that have different lending methods. This means that you are more likely to be approved by a lender within our network because there are more options available to you. Since each lender has their own lending policies, once approved, please be sure to read their disclosures and lending practices carefully before you sign and agree to the loan.`,
    accordings: [],
  },
  {
    header: `
    Fast, Easy & Secure Online Form.
    `,
    title: `Disclosure Policy`,
    contents: ``,
    accordings: [
      {
        title: ` APR Information
        `,
        contents: `This is information about the Annual Percentage Rate (APR). The APR defines the rate of interest a borrower pays over the course of a year. It describes the costs to the borrower in a yearly rate. RedArrowLoans cannot promise a specific APR. Our lending partners set the APR on loans and repayment terms. Since we are not a lender ourselves, we do not have control over the terms of your agreement with the lender you may be connected with. Read the terms of your loan carefully before accepting and signing a loan contract.`
      },
      {
        title: `  Renewal Policy
        `,
        contents: `
        Lenders have unique Renewal Policies. Some of them have automatically renew or "roll-over" Features. These conveniences often come at an additional fee. Please ask the lender you were connected with for their renewal policy. Again it is vital to read through the entire Loan Agreement and Disclosure to make sure you are comfortable with their terms before accepting the loan.
        `
      },
      {
        title: `
        Late, Partial, or None Payments and Collection
        `,
        contents: `
        Though each lender has to operate within the state laws that govern them, they have their respective approaches to handling late payments. A loan is an agreement between you and the lender to fully repay the loan by the time agreed. Depending on your agreement with your lender, if you are late for the agreed payment, a lender may add fees, send to a collections agency, report your late, partial or non payment to a consumer reporting agency. These policies change per lender, so please make sure to consult your lender to find their respective policies.
        `
      },
    ],
  },
  {
    header: `
    A Better Personal Money Solution
    `,
    title: `FAQ`,
    contents: ``,

    accordings: [
      {
        title: ` APR Information
        `,
        contents: `This is information about the Annual Percentage Rate (APR). The APR defines the rate of interest a borrower pays over the course of a year. It describes the costs to the borrower in a yearly rate. RedArrowLoans cannot promise a specific APR. Our lending partners set the APR on loans and repayment terms. Since we are not a lender ourselves, we do not have control over the terms of your agreement with the lender you may be connected with. Read the terms of your loan carefully before accepting and signing a loan contract.`
      },
      {
        title: `  Renewal Policy
        `,
        contents: `
        Lenders have unique Renewal Policies. Some of them have automatically renew or "roll-over" Features. These conveniences often come at an additional fee. Please ask the lender you were connected with for their renewal policy. Again it is vital to read through the entire Loan Agreement and Disclosure to make sure you are comfortable with their terms before accepting the loan.
        `
      },
      {
        title: `
        Late, Partial, or None Payments and Collection
        `,
        contents: `
        Though each lender has to operate within the state laws that govern them, they have their respective approaches to handling late payments. A loan is an agreement between you and the lender to fully repay the loan by the time agreed. Depending on your agreement with your lender, if you are late for the agreed payment, a lender may add fees, send to a collections agency, report your late, partial or non payment to a consumer reporting agency. These policies change per lender, so please make sure to consult your lender to find their respective policies.
        `
      },
    ],
  },
]
const BoxAccording = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5' >
      {data.map((item, key) => (
        <div key={key} >
          <BoxAccordingItem
            header={item.header}
            title={item.title}
            contents={item.contents}
            accordings={item.accordings}
          />
        </div>
      ))}
    </div>
  )
}

export default BoxAccording