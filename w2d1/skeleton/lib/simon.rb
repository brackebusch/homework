class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize(sequence_length = 1, game_over = false, seq = [])
    @sequence_length = sequence_length;
    @game_over = game_over
    @seq = seq
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message
    @sequence_length += 1
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    user_guesses = []
    "Input the displayed sequence one color at a time"
    @sequence_length.times do 
      i = 0
      print "Color > "
      user_guesses << gets.chomp.downcase
      if user_guesses[i] != @seq[i]  
        game_over_message
        reset_game
        break
      end
      i+=1
    end
  end

  def add_random_color
    build_rand = Random.new
    @seq << COLORS[build_rand.rand(5) - 1]    
  end

  def round_success_message
    puts "Correct! Now for round #{@sequence_length}!"
  end

  def game_over_message
    "You failed to remember the colors correctly"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
