const createErrorFactory = function (name)  {
    return(
    class BusinessError extends Error {
        constructor(message){
            super(message)
            this.name = name
        }
    })
}


export const BadReques = createErrorFactory('BadReques')
export const Unauthorized = createErrorFactory('Unauthorized')
export const NotFound = createErrorFactory('NotFound')
export const InternalServerError = createErrorFactory('InternalServerError')
export const ServiceUnavailable = createErrorFactory('ServiceUnavailable')