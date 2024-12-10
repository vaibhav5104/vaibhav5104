import "../index.css"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

export const Testing = () => {

    const {API} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Create a FormData object to handle file upload
            const formData = new FormData();
            const fileInput = e.target.elements['image-testing']; // Get the file input element
            formData.append('image-testing', fileInput.files[0]); // Append the file to the FormData object
    
            // Make the fetch request
            const response = await fetch(`${API}/api/tour/image`, {
                method: "POST",
                body: formData // Pass the FormData object directly
            });
    
            // Check the response
            if (response.ok) {
                const data = await response.json();
                console.log('Upload successful', data);
            } else {
                console.error('Upload failed', response.statusText);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };
    

    return(<>

        {/* <form action={`${API}/api/tour/image`} method="POST" encType="multipart/form-data"> */}
        <form onSubmit={handleSubmit}>
            <input 
                type="file"
                name="image-testing"
            />
            <button type="submit">upload</button>
        </form>

    </>)

}