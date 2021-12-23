export const NewPostPage = () => {

  //check if current user is logged into
  useEffect (
      () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          //when the auth changes like user login/logout, it will tell us
          if (!user) {
            history.push("/login");
          }
        })
      }, []
    );
}