import React from 'react'
import {Toast} from 'react-bootstrap'
import {connect} from 'react-redux'
import {hideToast} from '../store/toast'

const ToastList = (props) => {
  const {toasts, hideToast} = props
  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
      }}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          autohide
          delay={3000}
          onClose={() => {
            hideToast(toast.id)
          }}
          show={toast.show}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{toast.header}</strong>
          </Toast.Header>
          <Toast.Body>{toast.body}</Toast.Body>
        </Toast>
      ))}
    </div>
  )
}

const mapStatetoProps = (state) => ({
  toasts: state.toast,
})
const mapDispatchtoProps = (dispatch) => ({
  hideToast: (id) => {
    dispatch(hideToast(id))
  },
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ToastList)
