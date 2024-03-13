
function AddForm(){
    return(
        <>
        <h1>Add A Book To Your Collection</h1>
        <form action="" method="POST">
            <label htmlFor="">Title</label>
            <input type="text" />
            <label htmlFor="">Author</label>
            <input type="text" />
            <label htmlFor="">Rating</label>
            <input type="text" />
        </form>
        </>
    )

}
export default AddForm;