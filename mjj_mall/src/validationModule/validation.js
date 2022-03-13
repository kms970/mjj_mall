module.exports = {
    /**
     * Validation Check
     * 
     * @param {Object} jsonObj {id: value, name: value} 
     * @returns Promise
     */
    isPossible: async (jsonObj) => {
        const regExpId = /^admin|^administrator|^root/gi;
        const regExpName = /^admin|^administrator|^root/gi;

        if (regExpId.test(jsonObj.id)) {
            return { customResponse: "FAILED", customError: "Can not use this ID", status: 10001 }; //사용불가 Id로 회원가입 요청시
        } else if (jsonObj.id == undefined) {
            return { customResponse: "FAILED", customError: "No propety ID", status: 10001 }; //Id property가 존재하지 않을시
        } else if (regExpName.test(jsonObj.name)) {
            return { customResponse: "FAILED", customError: "Can not use this Name", status: 10001 }; //Name property가 존재하지 않을시
        } else if (jsonObj.name == undefined) {
            return { customResponse: "FAILED", customError: "No propety Name", status: 10001 }; //Name property가 존재하지 않을시
        }else {
            return { customResponse: "SUC"};
        }
    }
}