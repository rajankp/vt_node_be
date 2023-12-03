const getUsers = 'SELECT * FROM public."Users"'
const getUserById = 'SELECT * FROM public."Users" as Users WHERE Users."uid" = $1'
const checkUserExists = 'SELECT * FROM public."Users" as Users WHERE Users."userName" = $1'
const addUser = `INSERT INTO public."Users"(
	"firstName", "middleName", "lastName", "userName", age)
	VALUES ($1, $2, $3, $4, $5);`
const deleteUser = `DELETE FROM public."Users" as Users WHERE Users."uid" = $1`

module.exports = {
    getUsers,
    getUserById,
    checkUserExists,
    addUser,
    deleteUser
}