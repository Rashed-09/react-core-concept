export default function Friend ({frnd}) {
     const {name, email} = frnd;
     return (
          <div style={{padding: "14px", border:"2px solid tomato", margin: "10px"}}>
               <h4>Name: {name}</h4>
               <h4>Email: {email}</h4>
          </div>
     )
}