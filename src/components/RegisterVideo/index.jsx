import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {

    const [values, setValues] = useState(propsDoForm.initialValues)

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value
            const name = e.target.name
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm(){
            setValues({})
        }
    }
}

const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZGRiZ25nZG5pdG9pYmdrZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5NTk1MTUsImV4cCI6MTk4NDUzNTUxNX0.e1wvrFUaqYtrs7RRGyIYOYauL8w3mkRiZ3YMgYWWaO4"
const PROJECT_URL = "https://widdbgngdnitoibgkefh.supabase.co"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)


function getThumbnail(url){
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

export default function RegisterVideo() {

    const formCadastro = useForm({
        initialValues: { titulo: "Titulo", url: "Url" }
    })
    const [formVisivel, setFormVisivel] = useState("false")

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel ? (
                <form onSubmit={(e) => {
                    e.preventDefault()

                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: getThumbnail(formCadastro.values.url),
                        playlist: "jogos",
                    }).then(() => {
                        
                    })

                    setFormVisivel(false)
                    formCadastro.clearForm()
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            x
                        </button>
                        <input name="titulo" placeholder="Titulo do video" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} />
                        <input name="url" placeholder="Url do video" value={formCadastro.values.url} onChange={formCadastro.handleChange} />
                        <button type="submit" onClick={() => setFormVisivel(false)}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            ) : false}
        </StyledRegisterVideo>
    )
}