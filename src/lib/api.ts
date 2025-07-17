export const getUserGithubProfile = async () => {
  try {
    const response = await fetch('https://api.github.com/user/119769817');
    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;  // Return null or a default object to avoid breaking the page
  }
}