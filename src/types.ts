import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export type TControllersExecute = (fastify: FastifyInstance, request: FastifyRequest, reply: FastifyReply) => void;