export interface FileValidationResult {
  valid: boolean
  alert: {
    title: string
    description: string
    variant: 'destructive' | 'default'
  }
}

export interface FileValidated {
  alert: {
    title: string
    description: string
    variant: 'destructive' | 'default'
  }
}
