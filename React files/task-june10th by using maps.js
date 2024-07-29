import React from 'react'
export default function Map1() {
  const cities = ['Hyderabad', 'Banglore', 'Chennai', 'Delhi', 'ooty', 'kerala']
  return (
    <div>
      <table >
        <tr>
          <td>City</td>
        </tr>

        {cities.map((x) => <tr><td>{x}</td></tr>)}

      </table>

    </div>
  )
}
