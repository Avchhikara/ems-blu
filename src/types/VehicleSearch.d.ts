import { Query } from 'express';
export default interface VehicleSearch extends Query {
    registrationNumber?: String
}