import { expect } from 'chai';
import UserService from '../../services/user.service';
import { createSandbox } from 'sinon';
const user = new UserService();
const sb = createSandbox();

describe("UserService", function () {
    describe("create", function () {
        it("should create a new user", async function () {
            const stubValue = {
                _id: "2",
                name: "was",
                email: "email@gmail.com",
            };
            const userService = new UserService();
            const stub = sb.stub(userService, "save").returns(stubValue);
            const user = await userService.save(stubValue);
            expect(stub.calledOnce).to.be.true;
            expect(user._id).to.equal(stubValue._id);
            expect(user.name).to.equal(stubValue.name);
            expect(user.email).to.equal(stubValue.email);
        });
    });
});