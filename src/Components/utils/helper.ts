export const secretEmail = (email: string) => {
    const [username, domain] = email.split("@");
    const secretUser = username.substring(0, 2) + "*".repeat(username.length - 2);
    return `${secretUser}@${domain}`;
  };