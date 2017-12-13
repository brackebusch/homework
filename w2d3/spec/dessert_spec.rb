require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject(:fudge) { Dessert.new("fudge", 50, chef) }
  let(:chef) { double("chef", name: "Lord Goblin King") }
  describe "#initialize" do
    it "sets a type" do
      expect(fudge.type).to eq('fudge')
    end

    it "sets a quantity" do
      expect(fudge.quantity).to eq(50)
    end

    it "starts ingredients as an empty array" do
      expect(fudge.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("glutin free cake", "enough", "Joe")}.to raise_error 
      # ('quantity must be a number')
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect(fudge.ingredients).to_not include('flour')
      fudge.add_ingredient('flour')
      expect(fudge.ingredients).to include('flour') 
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
    ingredients = %w(oil, coco, egg, sugar, flour)
      ingredients.each {|item| fudge.add_ingredient(item)}
    expect(fudge.ingredients).to eq(ingredients)
    fudge.mix!
    expect(fudge.ingredients).to_not eq(ingredients)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      expect(fudge.quantity - 7).to eq(fudge.eat(7))
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { fudge.eat(51)}.to raise_error("not enough left!")      
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Lord Goblin King the Great Baker")
      expect(fudge.serve).to eq("Chef Lord Goblin King the Great Baker has made 50 fudges!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(fudge)
      fudge.make_more
    end
  end
end
