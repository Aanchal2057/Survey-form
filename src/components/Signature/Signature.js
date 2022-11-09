import React, { Component } from 'react'

import SignaturePad from 'react-signature-canvas'
import styles from '../Signature/style.module.css'
// import styles from '../signature/style.module.css'
// import styles from './styles.module.css'

class Signature extends Component {
  state = { trimmedDataURL: null }
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas()
        .toDataURL('image/png')
    })
  }
  render() {
    let { trimmedDataURL } = this.state
    return <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignaturePad canvasProps={{ className: styles.sigPad }}
          ref={(ref) => { this.sigPad = ref }} />
      </div>


      <button className={styles.buttons} onClick={this.clear}>
        Clear
      </button>
    </div>
  }
}

export default Signature;