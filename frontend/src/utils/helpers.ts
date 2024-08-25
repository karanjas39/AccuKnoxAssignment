export function getFirstLetterOfEmail(email: string): string {
  if (!email) {
    return "A";
  }

  return email.charAt(0);
}
