import React, { Component } from 'react';

class FormField extends Component {
    render() {
        return (
            <div>
                <div className="field">
                    <label className="label">{this.props.label}</label>
                    <div className="control">
                        <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
                    </div>
                </div>
            </div>
        );
    }
}


// const FormField = props => {
//     return (
//       <div className='field'>
//         <label className='label'>{props.label}</label>
//         <div className="control">
//             <input className="input" type={props.type} placeholder={props.placeholder}/>
//         </div>
//       </div>
//     );
//   };


//   function FormField(props) {
//     return (
//       <div className='field'>
//         <label className='label'>{props.label}</label>
//         <div className="control">
//             <input className="input" type={props.type} placeholder={props.placeholder}/>
//         </div>
//       </div>
//     );
//   };

export default FormField;