type UserID = string;
type UserName = string;
type FriendID = string;

class API {
  async getLoggedInUserID(): Promise<UserID> {
    const currentUserID = localStorage.getItem("UserID");
    const loggedInUserID = fetchLoggedInUser(currentUserID);
    return loggedInUserID;
  }
  getFriendIDs(userID: UserID): Promise<FriendID[]> {
    const friendIDs = fetchFriendIDs(userID);
    return friendIDs;
  }
  getUserName(userID: UserID): Promise<UserName> {
    const username = fetchUserName(userID);
    return username;
  }
}

async function fetchLoggedInUser(userID: UserID): Promise<UserID> {
  try {
    const response = await fetch(`https://facebook.com/api/user/${userID}`);
    const data = await response.json();
    return data.userID;
  } catch (error) {
    throw new Error("Failed to retrieve UserID for logged in user.");
  }
}

async function fetchUserName(userID: UserID): Promise<UserName> {
  try {
    const response = await fetch(`https://facebook.com/api/user/${userID}`);
    const data = await response.json();
    return data.username;
  } catch (error) {
    throw new Error(
      `Failed to retrieve username for user with UserID: ${userID}`
    );
  }
}

async function fetchFriendIDs(userID: UserID): Promise<FriendID[]> {
  try {
    const response = await fetch(`https://facebook.com/api/user/${userID}`);
    const data = await response.json();
    return data.friendIDs;
  } catch (error) {
    throw new Error(
      `Failed to retrieve username for user with UserID: ${userID}`
    );
  }
}
