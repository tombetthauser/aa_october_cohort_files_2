require 'rspec'
require 'rails_helper'
require 'spec_helper'

require_relative '../problems/ar_queries.rb'

describe 'find_the_ship' do
  subject { find_the_ship.as_json }

  it 'retrieves the correct information' do
    expected_result = [
		{id: 4, score: 7.2, yr: 1997}
	].map{ |el| el.stringify_keys }

    expect(subject).to contain_exactly(*expected_result)
  end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end

describe 'lowest_score' do
  subject { lowest_score.as_json }

  it 'retrieves the correct information' do
    expected_result = [
		{id: 1158, title: "Police Academy: Mission to Moscow" }
	].map{ |el| el.stringify_keys }

    expect(subject).to contain_exactly(*expected_result)
  end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end

describe 'god_father_movies' do
  subject { god_father_movies.as_json }

  it 'retrieves the correct information' do
    expected_result = [
		{ id: 12, title: "Godfather, The", yr: 1972 },
		{ id: 61, title: "Godfather: Part II, The", yr: 1974 },
		{ id: 437, title: "Godfather: Part III, The", yr: 1990 }
	].map{ |el| el.stringify_keys }

    expect(subject).to contain_exactly(*expected_result)
  end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end


describe 'stewart_movies' do
  subject { stewart_movies.as_json }

  it 'retrieves the correct information' do
    expected_result = [{ id: 631, title: "Robin Hood: Men in Tights", score: 5.3},
 		{ id: 506, title: "Prince of Egypt, The", score: 7.2},
 		{ id: 311, title: "Conspiracy Theory", score: 6.5},
 		{ id: 68, title: "Star Trek: First Contact", score: 7.2},
 		{ id: 276, title: "Excalibur", score: 7.4},
 		{ id: 92, title: "X-Men", score: 7.8},
 		{ id: 280, title: "Star Trek: Generations", score: 6.0},
		 { id: 252, title: "Star Trek: Insurrection", score: 6.4}
	].map{ |el| el.stringify_keys }

    expect(subject).to contain_exactly(*expected_result)
  end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end

describe 'meg_movies' do
  subject { meg_movies.as_json }

  it 'retrieves the correct information' do
    expected_result = [ { id: 83, title: "Top Gun", yr: 1986 },
		{ id: 661, title: "Innerspace", yr: 1987 },
		{ id: 1363, title: "Presidio, The", yr: 1988 },
		{ id: 1532, title: "D.O.A.", yr: 1988 },
		{ id: 104, title: "When Harry Met Sally...", yr: 1989 },
		{ id: 503, title: "Doors, The", yr: 1991 },
		{ id: 181, title: "Sleepless in Seattle", yr: 1993 },
		{ id: 954, title: "I.Q.", yr: 1994 },
		{ id: 1342, title: "When a Man Loves a Woman", yr: 1994 },
		{ id: 1826, title: "Restoration", yr: 1995 },
		{ id: 658, title: "French Kiss", yr: 1995 },
		{ id: 452, title: "Courage Under Fire", yr: 1996 },
		{ id: 825, title: "Addicted to Love", yr: 1997 },
		{ id: 1016, title: "Anastasia", yr: 1997 },
		{ id: 1240, title: "Hurlyburly", yr: 1998 },
		{ id: 255, title: "City of Angels", yr: 1998 },
		{ id: 224, title: "You've Got Mail", yr: 1998 },
		{ id: 1413, title: "Hanging Up", yr: 2000 }
	].map{ |el| el.stringify_keys }

    expect(subject).to eq(expected_result)
  end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end

describe 'actor_ids_from_blade_runner' do
	subject { actor_ids_from_blade_runner }

	it 'retrieves the correct information' do
		expect(subject).to contain_exactly(
		6, 437, 515, 591, 1005, 1100, 1145, 1344, 1450, 3379
    )
	end

  it 'hits the database exactly once' do
    expect{ subject.as_json }.to make_database_queries(count: 1)
  end
end

describe 'al_pacino_not_number_one' do
  subject { al_pacino_not_number_one.as_json }

  it 'retrieves the correct information' do
    expected_result =  [{id: 136, title: "Devil's Advocate, The"},
      {id: 567, title: "Dick Tracy"},
      {id: 498, title: "Dog Day Afternoon"},
      {id: 12, title: "Godfather, The"}
    ].map{ |el| el.stringify_keys }

    expect(subject).to contain_exactly(*expected_result)
  end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end


describe 'harrying_times' do
  subject { harrying_times }

  it 'retrieves the correct information' do
	expected_result = [1988, 1997]

    expect(subject).to contain_exactly(*expected_result)
  end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end

describe 'biggest_cast' do
  subject { biggest_cast.as_json }

  it 'retrieves the correct information' do
    expected_result = [
      {id: 373, title: 'Fear and Loathing in Las Vegas'},
      {id: 280, title: 'Star Trek: Generations'},
      {id: 1153, title: '200 Cigarettes'}
    ].map{ |el| el.stringify_keys }

    expect(subject).to contain_exactly(*expected_result)
  end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end



describe 'vain_directors' do
	subject { vain_directors.as_json }
	it 'retrieves the correct information' do
		expected_result = [
			{id: 1073, title: 'Zelig', name: 'Woody Allen'},
			{id: 921, title: 'Sleeper', name: 'Woody Allen'},
			{id: 1169, title: 'Sweet and Lowdown', name: 'Woody Allen'},
			{id: 1244, title: 'Small Time Crooks', name: 'Woody Allen'},
			{id: 1121, title: 'Everything You Always Wanted to Know About Sex', name: 'Woody Allen'},
			{id: 1318, title: 'Bananas', name: 'Woody Allen'},
			{id: 1648, title: 'Broadway Danny Rose', name: 'Woody Allen'},
			{id: 1544, title: 'New York Stories', name: 'Woody Allen'},
			{id: 1578, title: 'Take the Money and Run', name: 'Woody Allen'},
			{id: 1770, title: 'Midsummer Night\'s Sex Comedy, A', name: 'Woody Allen'},
			{id: 208, title: 'Annie Hall', name: 'Woody Allen'},
			{id: 642, title: 'Deconstructing Harry', name: 'Woody Allen'},
			{id: 1027, title: 'True Crime', name: 'Clint Eastwood'},
			{id: 769, title: 'Space Cowboys', name: 'Clint Eastwood'},
			{id: 812, title: 'Outlaw Josey Wales, The', name: 'Clint Eastwood'},
			{id: 1440, title: 'Firefox', name: 'Clint Eastwood'},
			{id: 1433, title: 'High Plains Drifter', name: 'Clint Eastwood'},
			{id: 1332, title: 'Pale Rider', name: 'Clint Eastwood'},
			{id: 1779, title: 'Sudden Impact', name: 'Clint Eastwood'},
			{id: 1518, title: 'Heartbreak Ridge', name: 'Clint Eastwood'},
			{id: 118, title: 'Unforgiven', name: 'Clint Eastwood'},
			{id: 651, title: 'Bridges of Madison County, The', name: 'Clint Eastwood'},
			{id: 657, title: 'Absolute Power', name: 'Clint Eastwood'},
			{id: 733, title: 'Bronx Tale, A', name: 'Robert De Niro'},
			{id: 762, title: 'Rocky II', name: 'Sylvester Stallone'},
			{id: 736, title: 'Rocky III', name: 'Sylvester Stallone'},
			{id: 607, title: 'Rocky IV', name: 'Sylvester Stallone'},
			{id: 109, title: 'Dances with Wolves', name: 'Kevin Costner'},
			{id: 635, title: 'Postman, The', name: 'Kevin Costner'},
			{id: 835, title: 'Throw Momma from the Train', name: 'Danny DeVito'},
			{id: 930, title: 'Bob Roberts', name: 'Tim Robbins'},
			{id: 946, title: 'History of the World: Part I', name: 'Mel Brooks'},
			{id: 1628, title: 'Silent Movie', name: 'Mel Brooks'},
			{id: 1624, title: 'High Anxiety', name: 'Mel Brooks'},
			{id: 730, title: 'Horse Whisperer, The', name: 'Robert Redford'},
			{id: 264, title: 'This Is Spinal Tap', name: 'Rob Reiner'},
			{id: 520, title: 'Dead Again', name: 'Kenneth Branagh'},
			{id: 1122, title: 'Heaven Can Wait', name: 'Warren Beatty'},
			{id: 1662, title: 'Reds', name: 'Warren Beatty'},
			{id: 567, title: 'Dick Tracy', name: 'Warren Beatty'},
			{id: 472, title: 'Star Trek V: The Final Frontier', name: 'William Shatner'},
			{id: 922, title: 'Gold Rush, The', name: 'Charles Chaplin'},
			{id: 589, title: 'Modern Times', name: 'Charles Chaplin'},
			{id: 715, title: 'Great Dictator, The', name: 'Charles Chaplin'},
			{id: 1374, title: 'Forget Paris', name: 'Billy Crystal'},
			{id: 1519, title: 'On Deadly Ground', name: 'Steven Seagal'},
			{id: 1792, title: 'Slacker', name: 'Richard Linklater'},
			{id: 1324, title: 'Prince of Tides, The', name: 'Barbra Streisand'},
			{id: 1258, title: 'Mirror Has Two Faces, The', name: 'Barbra Streisand'},
			{id: 1426, title: 'Defending Your Life', name: 'Albert Brooks'},
			{id: 40, title: 'Citizen Kane', name: 'Orson Welles'},
			{id: 522, title: 'Touch of Evil', name: 'Orson Welles'},
			{id: 1305, title: 'Orgazmo', name: 'Trey Parker'},
			{id: 111, title: 'South Park: Bigger, Longer and Uncut', name: 'Trey Parker'},
			{id: 143, title: 'Sling Blade', name: 'Billy Bob Thornton'},
			{id: 1341, title: 'Best in Show', name: 'Christopher Guest'},
			{id: 488, title: 'Beavis and Butt-head Do America', name: 'Mike Judge'},
			{id: 832, title: 'Buffalo \'66', name: 'Vincent Gallo'},
			{id: 74, title: 'Vita &#232; bella, La', name: 'Roberto Benigni'},
			{id: 1745, title: 'Young Einstein', name: 'Yahoo Serious'}
		].map{ |el| el.stringify_keys }

		expect(subject).to contain_exactly(*expected_result)
	end

  it 'hits the database exactly once' do
    expect{ subject }.to make_database_queries(count: 1)
  end
end