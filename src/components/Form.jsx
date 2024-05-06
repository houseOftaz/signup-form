// fonction utilisée pour gérer l'état et les effets dans le composant
import { useEffect, useState } from "react"

// déclare le composant `form` comme une fonction react
function Form() {
  // défini les différents états à l'aide de la fonction `useState`
  // 1 état = `firstName` | `setFirstName` = fonction de maj de l'état et appel une fonction interne a react pour render le composant
  const [firstName, setFirstName] = useState("")

  // état de validité du formulaire, indique si le form est valide ou non, false de base
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    console.log("hello bro")
    if (firstName.length <3) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
    // ici `useEffect` détermine si le form est valid à chaque changement d'1 champ du formulaire
    // met à jour l'état `isFormValid` en fonction de la longueur du prénom >=4
    // et de la présence des valeurs pour les autres champs
    setIsFormValid(firstName.length >=4)
  },[firstName])

  // cette fonction est appelée à chaque fois que le contenu du champ change
  // maj avec la nouvelle valeur saisie
  const onFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  // `submitForm` est appelé lorsque le form est soumis
  // empêche le comportement/default de l'`e` de soumission puis cré un new objet `data`
  const submitForm = (e) => {
    e.preventDefault()
    const myFormData = new FormData(e.target)
    console.log(myFormData.get("first-name"))
  }

  // retourne le JSX du composant
  return (

    <article className="form-container">
        <p className="sticker">
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </p>

        <form onSubmit={ submitForm }>

          <input
            // ici value est liée à l'état `firstName`, permet d'afficher la valeur actuelle dans le champ
            // `onChange` lié a la fonction `onFirstNameChange`, permet de maj l'état de `firstName` quand le contenu du champ change
            value={firstName} onChange={ (e) => onFirstNameChange(e) }
            type="text"
            name="first-name"
            placeholder="First-name"
            required
            aria-label="First Name"/>
            {!isFormValid && <p>yoyoyoyooyo</p> }
            {/*<MyCustomDialog/>} faire ca dans un fichier component*/ }

          <input 
            type="text"
            name="last-name"
            placeholder="Last-name"
            required
            aria-label="Last Name"/>

          <input
            type="email" 
            name="email"
            placeholder="Email Address"
            required
            aria-label="Email Address"/>

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            aria-label="Password"/>

          <button
            type="submit"
            disabled={!isFormValid} >
              claim your free trial
          </button>

          {/* expression ternaire affiche un message selon validité du formulaire */}
          { isFormValid? <h2>Le formulaire est valid !</h2> : <h2>my form is not valid</h2> }
          
          <p className="click-btn-info">By clicking the button, you are agreeing to our <a href="/">Terms and Services</a></p>

        </form>

    </article>
  )
}

export default Form
