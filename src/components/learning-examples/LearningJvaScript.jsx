const person = {
    name:'Himanshu',
    address: {
        line1:'Bhavna Nagar',
        city:'Bhopal',
        Country:'India'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: ()=>{
        person.profiles.map(
            (profile) => {
                console.log(profile)
                return undefined
            }
        )
    }
}

export default function LearningJavaScript(){
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()} </div>
        </>
    )
}