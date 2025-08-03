import type { Result } from 'neverthrow'
import type { AppError } from './AppError'

export type RequestResponse<T> = Result<T, AppError>
