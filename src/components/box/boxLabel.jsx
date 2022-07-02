import React from 'react'
import LabelItem from './labelItem'

const data  = [
  {
    id:1,
    title: `Personal LoansOnline`,
    contents:`
    RedArrowLoans online form is quick, secure, & hassle free. You can fill out our online form in just a matter of minutes from the privacy of your own home.
    `,
    image:`/img/computer.png`,
  },
  {
    id:2,
    title: `All Credit Types
    Accepted`,
    contents:`There are many advantages with RedArrowLoans. You can fill out our Online Form with any level of credit rating, from no rating to excellent at RedArrowLoans.

    `,
    image:`/img/cards.png`,
  },
  {
    id:3,
    title: `See Money in Your
    Account
    `,
    contents:`Another incredible benefit is that your funds are deposited directly into your bank account and are accessible as quickly as the next business day!`,
    image:`/img/bank.png`,
  },
  {
    id:4,
    title: `Basic Loan
    Requirements`,
    contents:`Must be at least 18 years old.
    Must be a U.S. citizen.
    Must be employed or receiving a steady income.
    Have a bank account with direct deposit is a plus.`,
    image:`/img/require.png`,
  },
]
const BoxLabel = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {data.map((item) => (
        <React.Fragment key = {item.id}>
          <LabelItem
            title = {item.title}
            contents = {item.contents}
            image = {item.image}
          />
        </React.Fragment>
      ))}
     
    </div>
  )
}

export default BoxLabel