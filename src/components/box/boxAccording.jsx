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
  {
    header: `
    Fast, Easy & Secure Online Form.
    `,
    title: `Disclosure Policy`,
    contents: ``,
    accordings: [
      {
        title: `
        What is a Personal Loan and what can I use it for?
    `,
        contents: `A personal loan is a way for an individual to receive up to $35,000 in funding. It is a loan that can be used for home enhancements, luxury item purchases, vehicle repairs or bill payments. The length of the loan is called the term and can range all the way up to 60 months, depending on the lender. Our simple Online Form does not contain any long questions. Instead, it asks for your basic information and a location for where you would like the loan to be sent to. It is that easy!`,
      },
      {
        title: `
        Are there any fees?
    `,
        contents: `RedArrowLoans services will always be provided free of charge, but that is not to say that the lender will give you a loan for free. Your lender will charge you fees and/or interest and must provide you with full disclosure of their loan terms upon approval. It is then your responsibility to read through the terms before signing your loan agreement.`,
      },
      {
        title: `
        What is the highest loan amount I can receive.
    `,
        contents: `$35,000. Though not all lenders are able to lend you $35,000.`,
      },
      {
        title: `
        How do you protect my privacy and personal information?
    `,
        contents: `We take privacy seriously, and so we use industry-standard encryption on our website so that third parties cannot intercept your data. You can also take a look at our privacy policy for more details on this.`,
      },
      {
        title: `
        What if I'm late or skip a payment?
    `,
        contents: `Lenders may be forgiving if you contact them directly, though some may automatically add a fee if it is in their agreement. Please contact the lender directly if you have an issue paying an installment.`,
      },
      {
        title: `
        How/when do I repay the loan?
    `,
        contents: `Please check the loan agreement from your lender for specifics on this, as each loan may vary.`,
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