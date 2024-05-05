
function Form() {
  return (

    <article className="form-container">
        <p className="sticker"><span>Try it free 7 days</span> then $20/mo. thereafter</p>

        <form method="post">
          <input type="text" name="first-name" placeholder="First-name" required aria-label="First Name"/>

          <input type="text" name="last-name" placeholder="Last-name" required aria-label="Last Name"/>

          <input type="email" name="email" placeholder="Email Address" required aria-label="Email Address"/>

          <input type="password" name="password" placeholder="Password" required aria-label="Password"/>

          <button type="submit">claim your free trial</button>
          
          <p className="click-btn-info">By clicking the button, you are agreeing to our <a href="/">Terms and Services</a></p>
        </form>

    </article>
  )
}

export default Form
