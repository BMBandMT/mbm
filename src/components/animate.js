import React from "react"
import styled from "styled-components"
import handleViewport from "react-in-viewport"

const AnimateStyle = styled.div`
  .animate {
    display: inline-block;
    &:after {
      display: block;
      content: "";
      border-bottom: solid 2px #ffffff;
      transform: scaleX(0);
      transition: transform 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      margin-top: 5px;
    }
    &.centergrow {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`
class Animate extends React.Component {
  render() {
    const { inViewport, forwardedRef } = this.props
    const htmlClass = inViewport ? this.props.type : ""
    return <div>testter2</div>
  }
}
// const Animate = (type, element, copy) => {
//   const animateElement = props => {
//     const { inViewport, forwardedRef } = props
//     const htmlClass = inViewport ? type : ""
//     return (
//       <div className={`animate ` + htmlClass} ref={forwardedRef}>
//         <h2>{copy}</h2>
//       </div>
//     )
//   }
//   const animateBlock = handleViewport(animateElement)
//   return <AnimateStyle>Test</AnimateStyle>
// }

export default Animate
