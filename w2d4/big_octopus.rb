@fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def onpow2
    biggest_fish = ""
    @fish.each_index do |idx|
        biggest_fish = @fish[idx] if @fish(idx+1..-1).all?{|fish| fish.length < @fish[idx1].length}
    end
    biggest_fish
end

def onlogn(arr)
    return arr if arr.length < 2

    mid = arr.length / 2

    left, right = arr.take(mid), arr.drop(mid)
    left_sorted, right_sorted = onlogn(left), onlogn(right)
    
    merge(left_sorted, right_sorted)
end

def merge(left, right)
    result = []
    until left.empty? || right.empty?
        left.first.length < right.first.length ? result << left.shift : result << right.shift
    end
    result + left + right
end

onlogn(@fish).last

def on
    @fish.reduce {|acc, el| acc.length > el.length ? acc : el}
end



# tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(direction, tiles_array)
    tiles_array.each_with_index do |tile, index|
      return index if tile == direction
    end
  end
  
  tiles_hash = {
      "up" => 0,
      "right-up" => 1,
      "right"=> 2,
      "right-down" => 3,
      "down" => 4,
      "left-down" => 5,
      "left" => 6,
      "left-up" => 7
  }
  
  def fast_dance(direction, tiles_hash)
    tiles_hash[direction]
  end