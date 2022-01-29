import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong> {capitalize(props.alert.type)} </strong> : {props.alert.msg}
    </div>
    </div>
  )
}


{/* <div class="toggleTrackX_dm8H"><span class="toggleIcon_pHJ9">🌞</span></div> */}
// .toggleTrackX_dm8H {
//     right: 10px;
//     width: 10px;
// }
// .toggleTrackCheck_mk7D, .toggleTrackX_dm8H {
//     bottom: 0;
//     height: 10px;
//     margin: auto 0;
//     top: 0;
//     position: absolute;
// }

// .toggleChecked_a04y .toggleTrackCheck_mk7D, .toggleTrackX_dm8H, [data-theme=dark] .toggle_iYfV .toggleTrackCheck_mk7D {
//     opacity: 1;
//     transition: opacity .25s;
// }