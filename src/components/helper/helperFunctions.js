// Get's id of currently logged in user.
export const getCurrentUser = () => {
    return sessionStorage.getItem("baking_user");
}