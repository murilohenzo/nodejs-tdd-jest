export default class AppError extends Error {
  constructor (public message: string, public statusCode = 400) {
    super()
    this.message = message
    this.statusCode = statusCode
  }
}