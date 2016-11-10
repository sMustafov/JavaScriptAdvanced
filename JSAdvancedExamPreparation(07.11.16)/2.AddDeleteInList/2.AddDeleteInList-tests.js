describe("TODO …", function() {
    it("Test", function() {
        list.add(3);
        let deleted = list.delete(0);
        expect(deleted).to.be.equal(3);
    });
    it("Test", function() {
        expect(list.delete('pesho')).to.be.equal(undefined);
    });
    it("Test", function() {
        list.add(5);
        list.add(66);
        expect(list.toString()).to.be.equal('5, 66');
    });
    it("Test", function() {
        list.add(3);
        expect(list.delete(-5)).to.be.equal(undefined);
    });
    it("Test", function() {
        list.add(5);
        list.add(66);
        list.add(45);
        list.delete(1);
        list.add(78);
        expect(list.toString()).to.be.equal('5, 45, 78');
    });
    it("Test", function() {
        expect(list.toString()).to.be.equal('');
    });
});
