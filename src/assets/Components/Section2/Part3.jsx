import "../../CSS/Home/Part3.css"

export default function Part3(){


    return (
        <div className="skills roboto-mono-skiils">
            <div className="stick"></div>
            <h1 className="skillTopic" >Skills</h1>

            <div className="update"> <p>Updated</p></div>
            <div className="code-pic"></div>
            
        
            <div className="skillBox1">
<figure className="html skill">
<img className="skillImage " style={{width:"200px",height:"200px"}} src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
<figcaption className="noto-sans-skill"><p>HTML</p></figcaption>
</figure>

<figure className="css skill">
<img className="skillImage " style={{width:"300px",height:"300px"}} src="https://cdn3d.iconscout.com/3d/free/thumb/free-css3-4387639-3640300.png?f=webp" alt="" />
<figcaption className="noto-sans-skill"><p style={{margin:"-35px"}}>CSS</p></figcaption>
</figure>

        
<figure className="js skill">
<img className="skillImage " style={{width:"200px",height:"200px"}} src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" />
<figcaption className="noto-sans-skill"><p style={{margin:"0px"}}>Javascript</p></figcaption>
</figure>

<figure className="react skill">
    <div className="reactlogo">
    <svg className="reactlogo" style={{width:"200px",height:"200px"}} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
    </div>
{/* <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="" /> */}
<figcaption className="noto-sans-skill"><p style={{margin:"0px"}}>React</p></figcaption>
</figure>

<figure className="jquery skill">
<img className="skillImage " style={{width:"200px",height:"200px"}} src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
<figcaption className="noto-sans-skill"><p>JQuery</p></figcaption>
</figure>
</div>

        <div className="skillBox2">
            <figure className="jquery skill">
                <img width="220" height="220" viewBox="0 0 512 116" style={{margin:"0px"}} src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxjZm_aIrJA.fLn8hAuDwzEAf5PwyhOe31MCCTwgKvLeSQIW2txbDssnD37rUf6FhncCuV6K8wO_ZUyMxyCMi9kU-&format=source"/>
                <figcaption className="noto-sans-skill"><a href="https://jquery.com/"><p>JQuery</p></a></figcaption>
            </figure>

        <figure className="nodejs skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />
        <figcaption className="noto-sans-skill"><p>NodeJS</p></figcaption>
        </figure>

        <figure className="express skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVmXTRybjWV4i9IV85_D7GtvdrJtzYHe8kn5KnJudvtK-OYhpqwTP-2aDiWyKrZvkEtE&usqp=CAU" alt="" />
        <figcaption className="noto-sans-skill"><p>ExpressJS</p></figcaption>
        </figure>

        <figure className="bootstrap skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://logowik.com/content/uploads/images/bootstrap-new725.logowik.com.webp" alt="" />
        <figcaption className="noto-sans-skill" style={{textAlign:"center"}}><p>Bootstrap </p></figcaption>
        </figure>

        <figure className="mongo skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s" alt="" />
        <figcaption className="noto-sans-skill"><p>MongoDB</p></figcaption>
        </figure>

        <figure className="C skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://cdn.iconscout.com/icon/free/png-256/free-c-58-1175247.png" alt="" />
        <figcaption className="noto-sans-skill"><p>C lang.</p></figcaption>
        </figure>

        <figure className="C++ skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png" alt="not" />
        <figcaption className="noto-sans-skill"><p>C++</p></figcaption>
        </figure>

        <figure className="python skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://i.pinimg.com/736x/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.jpg" alt="" />
        <figcaption className="noto-sans-skill"><p>Python</p></figcaption>
        </figure>

        <figure className="Csharp skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://printfx.co.za/image/cache/catalog/web/logos/c_sharp-800x800.jpg" alt="" />
        <figcaption className="noto-sans-skill"><p>Csharp</p></figcaption>
        </figure>

        <figure className="java skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="https://cdn.worldvectorlogo.com/logos/java.svg" alt="" />
        <figcaption className="noto-sans-skill"><p></p></figcaption>
        </figure>

        <figure className="os skill">
        <img className="skillImage " style={{width:"200px",height:"200px"}} src="data:image/png;base64,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" alt="" />
        <figcaption className="noto-sans-skill" style={{textAlign:"center"}}><p>Operating System  </p></figcaption>
        </figure>









        </div>        
        
        </div>
    )
}