import React, { Component } from 'react'
import '../../companents-css/Footer/footer.css'

export class Footer extends Component {
  render() {
    return (
      <footer>
            <div className="tiv">© 2005-2024 List.am</div>
            <div className="alte">
                <p>Տեղեկանք</p>
                <p>Հետադարձ կապ</p>
                <p>Օգտագործման համաձայնագիր</p>
            </div>
      </footer>
    )
  }
}

export default Footer