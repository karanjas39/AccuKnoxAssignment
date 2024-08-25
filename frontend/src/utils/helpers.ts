export function getFirstLetterOfEmail(email: string): string {
  if (!email) {
    return "CN";
  }

  return email.slice(0, 2);
}
