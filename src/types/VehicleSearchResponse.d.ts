import Vehicle from './Vehicle';

export default interface VehicleSearchResponse {
    authorized: boolean,
    vehicle?: Vehicle
}