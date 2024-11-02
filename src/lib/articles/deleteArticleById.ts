export const deleteArticleById = async (
  articleId: string | undefined
): Promise<void> => {
  try {
    const response = await fetch(`/api/articles/${articleId}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }
  } catch (error: any) {
    console.error(error.message)
    throw error
  }
}
